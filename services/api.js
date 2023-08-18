import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rpuqlftewprzvpemqhuc.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdXFsZnRld3ByenZwZW1xaHVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjIzNjEwNiwiZXhwIjoyMDA3ODEyMTA2fQ.JYTVaJVmHUC7XSWVX0jRA8ZdEkpeEMabc40i9VnXkRw',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJwdXFsZnRld3ByenZwZW1xaHVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjIzNjEwNiwiZXhwIjoyMDA3ODEyMTA2fQ.JYTVaJVmHUC7XSWVX0jRA8ZdEkpeEMabc40i9VnXkRw',
    'content-type': 'application/json',
  },
});
