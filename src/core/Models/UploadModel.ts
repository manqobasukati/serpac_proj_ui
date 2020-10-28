export interface UploadModel extends Document {
  project: string;
  url: string;

  name: string;

  created: Date;
  updated: Date;
}
