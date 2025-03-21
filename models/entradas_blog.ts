import { Schema, model, models } from "mongoose";


const enlaces = new Schema(
    {
        titulo: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        enlace: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)


const entradas_blog = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    contenido: {
      type: String,
      required: true,
      trim: true,
    },
    autor: {
      type: Schema.Types.ObjectId,
      ref: "administradores",
      required: true,
      trim: true,
    },
    fecha: {
      type: Date,
      default: Date.now,
      required: true,
    },
    anexos: [enlaces]
  },
  {
    timestamps: true,
  }
);

export default models.entradas_blog ||
  model("entradas_blog", entradas_blog);
