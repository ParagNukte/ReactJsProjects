const importKey = import.meta.env;
const conf = {
  appwriteUrl: String(importKey.VITE_APPWRITE_URL),
  appwriteProjectId: String(importKey.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(importKey.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(importKey.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(importKey.VITE_APPWRITE_BUCKET_ID),
};
export default conf;
