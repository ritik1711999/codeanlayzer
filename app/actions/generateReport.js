"use server";

import getGemini from "@/config/gemini";
import { SchemaType } from "@google/generative-ai";

export async function generateReport(code, language) {
  const genAi = getGemini();

  const schema = {
    type: SchemaType.OBJECT,
    properties: {
      codeSnippet: {
        type: SchemaType.STRING,
        description: "The original code snippet that is being analyzed.",
      },
      analysis: {
        type: SchemaType.OBJECT,
        properties: {
          readabilityScore: {
            type: SchemaType.NUMBER,
            description:
              "A score representing the readability of the code (0 to 100).",
          },
          lintingIssues: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                issue: { type: SchemaType.STRING },
                lineRange: { type: SchemaType.STRING },
                severity: {
                  type: SchemaType.STRING,
                  enum: ["warning", "error"],
                },
                suggestion: {
                  type: SchemaType.OBJECT,
                  properties: {
                    fixedCode: { type: SchemaType.STRING },
                  },
                },
              },
              required: ["issue", "lineRange", "severity", "suggestion"],
            },
          },
          errors: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                issue: { type: SchemaType.STRING },
                lineRange: { type: SchemaType.STRING },
                severity: {
                  type: SchemaType.STRING,
                  enum: ["warning", "error"],
                },
                suggestion: {
                  type: SchemaType.OBJECT,
                  properties: {
                    fixedCode: { type: SchemaType.STRING },
                  },
                },
              },
              required: ["issue", "lineRange", "severity", "suggestion"],
            },
          },
          complexity: {
            type: SchemaType.OBJECT,
            properties: {
              cyclomaticComplexity: { type: SchemaType.NUMBER },
              halsteadComplexity: {
                type: SchemaType.OBJECT,
                properties: {
                  difficulty: { type: SchemaType.NUMBER },
                  volume: { type: SchemaType.NUMBER },
                  effort: { type: SchemaType.NUMBER },
                },
                required: ["difficulty", "volume", "effort"],
              },
            },
            required: ["cyclomaticComplexity", "halsteadComplexity"],
          },
          bestPractices: {
            type: SchemaType.OBJECT,
            properties: {
              arrowFunctionUse: { type: SchemaType.STRING },
              variableNaming: {
                type: SchemaType.OBJECT,
                properties: {
                  message: { type: SchemaType.STRING },
                  lineRange: { type: SchemaType.STRING },
                  suggestion: {
                    type: SchemaType.OBJECT,
                    properties: {
                      fixedCode: { type: SchemaType.STRING },
                    },
                  },
                },
                required: ["message", "lineRange", "suggestion"],
              },
            },
            required: ["arrowFunctionUse", "variableNaming"],
          },
          hints: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                suggestion: { type: SchemaType.STRING },
                lineRange: { type: SchemaType.STRING },
                fixedCode: { type: SchemaType.STRING },
              },
              required: ["suggestion", "lineRange", "fixedCode"],
            },
          },
          score: {
            type: SchemaType.OBJECT,
            properties: {
              overall: { type: SchemaType.NUMBER },
              readability: { type: SchemaType.NUMBER },
              performance: { type: SchemaType.NUMBER },
              maintainability: { type: SchemaType.NUMBER },
            },
            required: [
              "overall",
              "readability",
              "performance",
              "maintainability",
            ],
          },
        },
        required: [
          "readabilityScore",
          "lintingIssues",
          "errors",
          "complexity",
          "bestPractices",
          "hints",
          "score",
        ],
      },
    },
    required: ["codeSnippet", "analysis"],
  };

  const prompt = `You are a backend server of a code analyzer app which generates a analysis report for a given code snippet in ${language} and return the report in the form of json following is the given code : ${code}`;

  const model = genAi.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const result = await model.generateContent(prompt);
  return result.response.text();
}
