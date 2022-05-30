import React, { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          value={input}
          placeholder="Add a task"
          name="text"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
