## Personal Portfolio

![Portfolio Website](https://i.ibb.co/WgPMpts/image.png)

## Pre-publish checklist

- Verify SEO title and description
- Verify PT and EN content
- Verify keyboard navigation
- Verify anchor navigation
- Verify `npm run build`

## Environment setup

Copy `.env.example` to `.env.local` and fill in the Baserow values:

```env
NEXT_PUBLIC_BASEROW_API_TOKEN=your_baserow_token_here
NEXT_PUBLIC_BASEROW_HOST=https://api.baserow.io
NEXT_PUBLIC_BASEROW_DATABASE_ID=your_baserow_database_id
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID=your_timeline_pt_table_id
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID=your_timeline_en_table_id
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID=your_accomplishments_pt_table_id
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID=your_accomplishments_en_table_id
```

Notes:
- `.env.local` has priority over `.env`
- `.env` should stay as a safe base file without real secrets
