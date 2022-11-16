import auth from "../../Models/auth/auth.js";
import students from "../../Models/users/student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const oldUser = await auth.findOne({ username });
    if (!oldUser) {
      return resizeBy.status(404).json({ message: "Người dùng không tồn tại" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
    if (!isPasswordCorrect) {
      return resizeBy.status(400).json({ message: "Mật khẩu không đúng" });
    }
    const Token = jwt.sign(
      {
        id: oldUser._id,
        username: oldUser.username,
      },
      process.env.secret,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: oldUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Đã xảy ra sự cố trong quá trình đăng nhập" });
  }
};
export const register = async (req, res) => {
  const { username, password,name, age, address, phone, gender, email } =
    req.body;
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
    });
    const result2 = await students.create({
      idStudent,
      name,
      age,
      address,
      phone,
      gender,
      email,
    });
    const Token = jwt.sign(
      {
        username: result2.username,
        id: result1._id,
      },
      process.env.secret,
      { expiresIn: "1h" }
    );
    res.staus(200).json({ result, result2, Token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Đã xảy ra sự cố trong quá trình đăng ký" });
  }
};
export const infoUser = async (req, res) => {
  try {
const result = await auth.find().populate({path:'student',populate:{path:'class' ,model:'class'}})
return res.json(result);  
  } catch (error) {
    
  }
};
export const data = async(req,res) => {
try {
  const newData = await auth.create({
      username: 'abc@gmail.com',
      password: '123456',
      role: 'admin',
      student:  [
        '63221467b3de3ba54d1eb438'
      ],
  }
  ) 
  res.json(newData);
} catch (error) {
  
}
}

