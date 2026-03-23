export const getAllTasks = (req, res) => {
  res.send("bạn có 10 việc cần làm");
};

export const createTask = (req, res) => {
  res.status(201).json({ message: "Nhiệm vụ đã được tạo thành công" });
};

export const updateTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ đã được cập nhật thành công" });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: "Nhiệm vụ đã được xóa thành công" });
};
