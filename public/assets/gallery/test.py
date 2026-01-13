import os
from PIL import Image

def rename_and_convert_images_to_jpg(
    folder_path,
    prefix="gallery",
    start_index=1,
    padding=3,
    quality=90
):
    """
    Convert all images to JPG and rename sequentially.

    Output:
    gallery_001.jpg, gallery_002.jpg, ...

    :param folder_path: Folder containing images
    :param prefix: Filename prefix
    :param start_index: Starting index
    :param padding: Zero padding
    :param quality: JPG quality (1–100)
    """

    valid_extensions = (".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".dng", ".DNG")

    files = sorted(
        f for f in os.listdir(folder_path)
        if f.endswith(valid_extensions)
    )

    for i, filename in enumerate(files, start=start_index):
        old_path = os.path.join(folder_path, filename)
        new_name = f"{prefix}_{str(i).zfill(padding)}.jpg"
        new_path = os.path.join(folder_path, new_name)

        try:
            with Image.open(old_path) as img:
                # Convert to RGB (required for JPG)
                img = img.convert("RGB")
                img.save(new_path, "JPEG", quality=quality)

            # Remove original file ONLY after successful save
            if old_path != new_path:
                os.remove(old_path)

            print(f"{filename}  →  {new_name}")

        except Exception as e:
            print(f"❌ Failed to process {filename}: {e}")

rename_and_convert_images_to_jpg(
    folder_path="/Users/hrithik/Desktop/images/frontend/public/assets/gallery",
    prefix="gallery",
    start_index=1,
    padding=3,
    quality=90
)
