export default async function handler(req, res) {
  const secret = process.env.CIPHER_API_SECRET;
  if (!secret) {
    return res.status(500).json({ error: 'Missing Cipher API key' });
  }

  // 🔁 Route logic here (to be expanded later)
  res.status(200).json({ status: 'Cipher API connected!' });
}
$