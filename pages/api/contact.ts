export default function handler(req, res) {
  if (req.method === "POST") {
    post(req, res);
  }
}

function post(req, res) {
  const { email, name, message } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !name ||
    name.trim() === "" ||
    !message ||
    message.trim() === ""
  ) {
    res.status(422).json({
      message: "Invalid input.",
    });
    return;
  }

  // Store it in a database
  const newMessage = {
    email,
    name,
    message,
  };

  console.log(newMessage);

  res
    .status(201)
    .json({ message: "Message sent successfully.", newMessage: newMessage });
}
