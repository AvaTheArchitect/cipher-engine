// cipher-engine/pages/api/tabparser.js

import { parseTab } from '@/cipher-engine/modules/tabParser';

export default function handler(req, res) {
  const { tabData } = req.body;
  const parsed = parseTab(tabData);
  res.status(200).json({ parsed });
}
