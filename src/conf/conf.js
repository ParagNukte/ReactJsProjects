const importKey = import.meta.env;
const conf = {
  appwriteUrl: String(importKey.VITE_APPWRITE_URL),
  appwriteProjectId: String(importKey.VITE_PROJECT_ID),
  appwriteDatabaseId: String(importKey.VITE_DATABASE_ID),
  appwriteCollectionId: String(importKey.VITE_COLLCTION_ID),
  appwriteBucketId: String(importKey.VITE_BUCKET_ID),
};

export default conf;
