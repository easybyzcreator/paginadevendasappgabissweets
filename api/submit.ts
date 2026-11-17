export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;
  const GOOGLE_SHEETS_URL =
    'https://script.google.com/macros/s/AKfycbw63T4I-Tb46aftOlURtwLjbuNKcgb3wvpxEy148jf94FohpT-OOP4spit8FDtG7XnA/exec';

  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      redirect: 'follow',
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: 'Erro ao salvar na planilha' });
    }
  } catch (error) {
    console.error('Erro ao enviar para Sheets:', error);
    return res.status(500).json({ success: false, error: 'Erro de conexão com a planilha' });
  }
}
