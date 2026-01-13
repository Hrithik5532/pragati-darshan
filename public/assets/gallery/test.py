import os

def rename_images_sequentially(
    folder_path,
    prefix="img",
    start_index=1,
    padding=3
):
    """
    Rename all images in a folder sequentially.

    Example:
    img_001.jpg, img_002.jpg, ...

    :param folder_path: Path to image folder
    :param prefix: Filename prefix (default: img)
    :param start_index: Starting number (default: 1)
    :param padding: Zero padding length (default: 3)
    """

    valid_extensions = (".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".dng", ".DNG")

    files = sorted(
        f for f in os.listdir(folder_path)
        if f.endswith(valid_extensions)
    )

    for i, filename in enumerate(files, start=start_index):
        ext = os.path.splitext(filename)[1]
        new_name = f"{prefix}_{str(i).zfill(padding)}{ext}"

        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)

        os.rename(old_path, new_path)
        print(f"{filename}  →  {new_name}")

rename_images_sequentially(
    folder_path="/Users/hrithik/Desktop/images/frontend/public/assets/gallery",
    prefix="gallery",
    start_index=1,
    padding=3
)
