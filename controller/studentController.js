import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students, { message: "Data Siswa Dapet" });
  } catch (error) {
    res.status(500).json({ message: "Data Siswa Ga Dapet", error });
  }
};
export const getStudentFilterByID = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const student = await prisma.student.findUnique({
      where: { id },
    });
    res.status(200).json({
      message: `Ini adalah data siswa dengan id ${id}`,
      data: student,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data siswa", error });
  }
};
export const createStudent = async (req, res) => {
  const studentBody = req.body;
  try {
    const student = await prisma.student.create({ data: studentBody });
    res.status(200).json({ data: student, message: "Data Siswa bertambah" });
  } catch (error) {
    res.status(500).json({ message: "Data Siswa Ga nambah", error });
  }
};

export const updateStudents = async (req, res) => {
  const id = parseInt(req.params.id);
  const studentBody = req.body;
  try {
    const student = await prisma.student.update({
      where: { id: id },
      data: studentBody,
    });
    res
      .status(201)
      .json({ message: "Berhasil update data siswa", data: student });
  } catch (error) {
    res.status(500).json({ message: "Data siswa ga terudate", error });
  }
};

export const deleteStudents = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await prisma.student.delete({ where: { id: id } });
    res.status(200).json({ message: "data deleted" });
  } catch (error) {
    res.status(500).json({ message: "Data Siswa Ga kedelete", error });
  }
};
