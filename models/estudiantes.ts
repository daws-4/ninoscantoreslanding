import { Schema, model, models } from "mongoose";

const representante = new Schema(
{
    nombres: {
        type: String,
        required: true,
        trim: true,
    },
    apellidos: {
        type: String,
        required: true,
        trim: true,
    },
    correo: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
    },
},
{
    timestamps: true,
}

)

const estudiante = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    nombres: {
      type: String,
      required: true,
      trim: true,
    },
    apellidos: {
      type: String,
      required: true,
      trim: true,
    },
    correo: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    mayor: {
      type: Boolean,
      default: false,
      required: true,
    },
    representante: {
      type: [representante], // Define representante como un arreglo de Representante
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default models.estudiante ||
  model("estudiante", estudiante);
