let tasks = []; // TODOタスクを格納する配列

const addTask = () => {
  const inputTask = document.getElementById("input-task"); // 入力欄を取得
  const taskList = document.getElementById("task-list"); // タスクのリストを取得

  // 入力欄が空であれば何もしない
  if (inputTask.value === "") {
    return;
  }

  tasks.push({
    name: inputTask.value,
    completed: false,
  }); // 新しいタスクを配列に追加
  inputTask.value = ""; // 入力欄を空にする

  renderTask(); // タスクを描画する
};

const renderTask = () => {
  const taskList = document.getElementById("task-list"); // タスクのリストを取得
  taskList.innerHTML = ""; // リストを空にする

  // タスクを1つずつ描画する
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li"); // 新しいタスクを作成

    // タスクの名前を表示する
    const taskName = document.createElement("span");
    taskName.innerText = task.name;

    // タスクの完了ボタンを作成
    const taskComplete = document.createElement("button");
    taskComplete.innerText = task.completed ? "Incomplete" : "Complete";
    taskComplete.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed; // タスクの完了状態を反転させる
      renderTask(); // タスクを再描画する
    });

    // タスクの削除ボタンを作成
    const taskDelete = document.createElement("button");
    taskDelete.innerText = "Delete";
    taskDelete.addEventListener("click", () => {
      tasks.splice(index, 1); // 配列からタスクを削除する
      renderTask(); // タスクを再描画する
    });

    if (tasks.length > 0) {
      renderTask(); // タスクを描画する
    }
    
    // 完了済みの場合はテキストに修飾を追加する
    if (task.completed != undefined && task.completed) {
      taskItem.classList.add("completed");
    }

    // 作成したDOM要素をタスクのリストに追加する
    taskItem.appendChild(taskName);
    taskItem.appendChild(taskComplete);
    taskItem.appendChild(taskDelete);
    taskList.appendChild(taskItem);
  });
};

// ボタンにイベントリスナーを追加する
const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTask);

// タスクの完了状態によって文字の装飾を変える
if (task.completed) {
  taskItem.classList.add("completed");
}

// タスクをリストに追加する
taskItem.appendChild(taskName);
taskItem.appendChild(taskComplete);
taskItem.appendChild(taskDelete);
taskList.appendChild(taskItem);

// 「Add」ボタンがクリックされたら新しいタスクを追加する
document.getElementById("add-task").addEventListener("click", addTask);

