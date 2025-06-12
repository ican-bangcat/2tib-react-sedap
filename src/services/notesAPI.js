import axios from 'axios'

const API_URL ="https://ckeygfwzqbktanugwyro.supabase.co/rest/v1/notes"
const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZXlnZnd6cWJrdGFudWd3eXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODU4MTUsImV4cCI6MjA2NTI2MTgxNX0.QfsPsyYaOaU0cD8Q0OhSVN4sFNGSbvSWlGhzW1iYyUU"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}