class Editor {
  private content: string;

  public createState(): EditorState {
    return new EditorState(this.content);
  }

  public restore(state: EditorState) {
    this.content = state.getContent();
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }
}

class EditorState {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  public getContent(): string {
    return this.content;
  }
}

class HistoryState {
  private states: EditorState[] = [];

  public push(state: EditorState): void {
    this.states.push(state);
  }

  public pop(): EditorState {
    const lastIndex = this.states.length - 1;
    const lastState = this.states[lastIndex]; // keep track of last state
    this.states.splice(lastIndex, 1); // remove last state from array
    return lastState; // return last state

    // Alternative way:
    // const removedState = this.states.pop();
    // return removedState!;
  }

  public getStates(): EditorState[] {
    return this.states;
  }
}

const editor = new Editor();
const keepHistory = new HistoryState();

editor.setContent("a"); // currentContent becomes: 'a'
keepHistory.push(editor.createState()); // history becomes: [a]

editor.setContent("b"); // currentContent becomes: 'b'
keepHistory.push(editor.createState()); // history becomes: [a, b]

editor.setContent("c"); // currentContent becomes: 'c'

editor.restore(keepHistory.pop()); // currentContent becomes: 'b' and history becomes [a]
editor.restore(keepHistory.pop()); // currentContent becomes: 'a' and history becomes []

console.log(editor.getContent());
