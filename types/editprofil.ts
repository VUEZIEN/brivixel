export type Profile = {
    bio?: string;
    phone?: string;
    email?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    photo?: string; // URL untuk gambar yang sudah dicrop
  };
  
  export type CropArea = {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  
  export type ImageCrop = {
    imageSrc: string; // Base64 atau URL gambar yang diupload
    croppedArea?: CropArea; // Area hasil crop
    croppedImage?: string; // URL hasil cropping gambar
  };
  