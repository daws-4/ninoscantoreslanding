import { Schema, model, models } from "mongoose";

const patrocinantes = new Schema(
  {
    nombre: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    logo: {
      type: String,
      required: true,
      trim: true,
    },
    enlace: {
      type: String,
      required: true,
      trim: true,
    },
    ahijado: {
      type: Schema.Types.ObjectId,
      ref: "estudiantes",
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.patrocinantes || model("patrocinantes", patrocinantes);
