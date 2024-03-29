import auth from "../auth/auth.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const oldUser = await auth.findOne({ username });
    if (!oldUser) {
      return res.status(404).json({ message: "Người dùng không tồn tại" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Mật khẩu không đúng" });
    }
    const Token = jwt.sign(
      {
        id: oldUser._id,
        username: oldUser.username,
        name: oldUser.name,
        age: oldUser.age,
        address: oldUser.address,
        phone: oldUser.phone,
      },
      process.env.JWT_ACCESS_KEY,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: oldUser, Token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Đã xảy ra sự cố trong quá trình đăng nhập" });
  }
};

export const register = async (req, res) => {
  const { username, password, name, age, address, phone } = req.body;
  try {
    const oldUser = await auth.findOne({ username });
    if (oldUser) {
      return res
        .status(400)
        .json({ message: "Nguời dùng này đã tồn tại trên hệ thống" });
    }
    const hashedPass = await bcrypt.hash(password, 12);
    const result = await auth.create({
      username,
      password: hashedPass,
      name,
      age,
      address,
      phone,
      // role:String
    });

    const Token = jwt.sign(
      {
        id: result._id,
        username: result.username,
        name: result.name,
        age: result.age,
        address: result.address,
        phone: result.phone,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "1h" }
    );
    res.staus(200).json({ result: Token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Đã xảy ra sự cố trong quá trình đăng ký" });
  }
};
