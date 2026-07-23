// The fixed 30-mark essay rubric (Essay manual §7). One rubric marks every essay
// question; question-specific guidance lives in each question's markers' notes.

export interface RubricCriterion {
  name: string;
  max: number;
  levels: { descriptor: string; marks: string }[];
}

export const ESSAY_RUBRIC: RubricCriterion[] = [
  {
    name: 'Introduction',
    max: 4,
    levels: [
      { descriptor: 'Provides an introduction that develops a sophisticated proposition, demonstrating a clear understanding of the focus and key terms of the question, and proposes a logical and coherent structure', marks: '4' },
      { descriptor: 'Provides an introduction that clearly identifies a proposition, demonstrating an understanding of the focus of the question, and gives a clear sense of the direction', marks: '3' },
      { descriptor: 'Provides an introduction that includes a simple proposition, demonstrating a general understanding of the topic', marks: '2' },
      { descriptor: 'Provides an introduction that consists of statements outlining the ‘who’ or ‘what’ to be discussed', marks: '1' },
    ],
  },
  {
    name: 'Narrative',
    max: 5,
    levels: [
      { descriptor: 'Demonstrates a comprehensive understanding of the major features of the historical narrative and evaluates the impact of forces, including people, events, ideas, and structures, and their significance on continuity and change', marks: '5' },
      { descriptor: 'Demonstrates a well-developed understanding of the major features of the historical narrative and discusses the significance of forces, including people, events, ideas and structures on continuity and change', marks: '4' },
      { descriptor: 'Demonstrates a general understanding of some of the major features of the historical narrative and outlines some relationships between forces and/or continuity and change', marks: '3' },
      { descriptor: 'Demonstrates some understanding of the historical narrative, and identifies minimal relationships between people, events, ideas and structures and/or continuity and change', marks: '2' },
      { descriptor: 'Demonstrates limited understanding of the historical narrative, and makes limited reference to people, events, ideas and/or structures', marks: '1' },
    ],
  },
  {
    name: 'Argument',
    max: 8,
    levels: [
      { descriptor: 'Develops a sophisticated and sustained argument that demonstrates depth of critical analysis, which is logical, coherent, and demonstrates an understanding of the complexity of the topic', marks: '7–8' },
      { descriptor: 'Develops a sustained argument that is analytical, logical and coherent, and demonstrates a clear understanding of the topic', marks: '5–6' },
      { descriptor: 'Develops a coherent argument with some analysis, and demonstrates a general understanding of the topic', marks: '3–4' },
      { descriptor: 'Develops a disjointed response with minimal sense of argument, containing generalisations and statements that suggest limited understanding of the topic', marks: '1–2' },
    ],
  },
  {
    name: 'Supporting evidence',
    max: 10,
    levels: [
      { descriptor: 'Consistently uses detailed, accurate and relevant evidence including a wide range of historical examples, quotations, statistics and sources to assist critical analysis and evaluation and, where appropriate, argue for and against a view/proposition. Engages with different perspectives and interpretations of history to develop and strengthen arguments', marks: '9–10' },
      { descriptor: 'Uses accurate and relevant evidence including a range of historical examples, quotations, statistics and sources to assist analysis. Incorporates perspectives and interpretations of history to strengthen arguments', marks: '7–8' },
      { descriptor: 'Uses mostly accurate and relevant evidence to support analysis. Begins to refer to perspectives and interpretations of history to support arguments', marks: '5–6' },
      { descriptor: 'Uses some accurate and relevant evidence which may include historical examples, quotations and/or sources to support the response', marks: '3–4' },
      { descriptor: 'Provides minimal evidence and/or historical examples to support a limited response', marks: '1–2' },
    ],
  },
  {
    name: 'Conclusion',
    max: 3,
    levels: [
      { descriptor: 'Provides a conclusion that effectively draws the argument or point of view together', marks: '3' },
      { descriptor: 'Provides a conclusion that summarises the argument or point of view', marks: '2' },
      { descriptor: "Provides a conclusion that generally restates the essay's point of view", marks: '1' },
    ],
  },
];

export const ESSAY_TOTAL = 30;
