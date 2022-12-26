var Editor = /** @class */ (function () {
    function Editor() {
    }
    Editor.prototype.createState = function () {
        return new EditorState(this.content);
    };
    Editor.prototype.restore = function (state) {
        this.content = state.getContent();
    };
    Editor.prototype.getContent = function () {
        return this.content;
    };
    Editor.prototype.setContent = function (content) {
        this.content = content;
    };
    return Editor;
}());
var EditorState = /** @class */ (function () {
    function EditorState(content) {
        this.content = content;
    }
    EditorState.prototype.getContent = function () {
        return this.content;
    };
    return EditorState;
}());
var HistoryState = /** @class */ (function () {
    function HistoryState() {
        this.states = [];
    }
    HistoryState.prototype.push = function (state) {
        this.states.push(state);
    };
    HistoryState.prototype.pop = function () {
        var lastIndex = this.states.length - 1;
        var lastState = this.states[lastIndex]; // keep track of last state
        this.states.splice(lastIndex, 1); // remove last state from array
        return lastState; // return last state
        // Alternative way:
        // const removedState = this.states.pop();
        // return removedState!;
    };
    HistoryState.prototype.getStates = function () {
        return this.states;
    };
    return HistoryState;
}());
var editor = new Editor();
var keepHistory = new HistoryState();
editor.setContent("a");
keepHistory.push(editor.createState());
editor.setContent("b");
keepHistory.push(editor.createState());
editor.setContent("c");
// keepHistory.push(editor.createState());
editor.restore(keepHistory.pop());
editor.restore(keepHistory.pop());
console.log(editor.getContent());
console.log(keepHistory.getStates());
