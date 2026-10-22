# How to edit your website

Your site is edited at **https://app.pagescms.org** — no code, no software to install. You edit text and photos in simple forms, click **Save**, and the site updates itself within a minute or two.

## Signing in (first time)

1. Go to https://app.pagescms.org and click **Sign in with GitHub**. (Colin will have added you to the GitHub repository.)
2. Open the repository called **Cha_Website**.
3. You will see the editing menu on the left.

## What's in the menu

| Menu item | What it controls |
|---|---|
| **Site settings** | Your name, email, phone, Calendly link, Instagram/LinkedIn, tagline |
| **Pages → Home page** | Headline, hero photo, the three cards, your intro paragraph |
| **Pages → Private Lessons** | Adults and children sections, rates, FAQ |
| **Pages → Homeschool Curriculum** | How it works, New York State info, levels, call to action |
| **Pages → Resources page** | The intro at the top of the Resources page |
| **Pages → About** | Your photo, your story, the DAEFLE explanation |
| **Pages → Contact** | Intro text and headings on the contact page |
| **Curriculum units** | One entry per unit; add, reorder, hide, or delete units |
| **Resources (downloads)** | One entry per PDF or paid resource |
| **Testimonials** | Quotes shown on the home page |

## English and French

Every piece of text has two boxes: **(EN)** and **(FR)**. Fill in both. If a French box is empty, the English text is shown instead, so nothing ever appears blank.

## Everyday tasks

**Change some text**
Open the page in the menu, edit the box, click **Save** (top right). Done.

**Add a curriculum unit**
Curriculum units → **Add entry**. Fill in the title (EN and FR), order number, level, ages, a one-sentence summary and the details. Add an image if you like. Save.
Untick **Show on the site** to hide a unit without deleting it.

**Add a free PDF**
Resources → **Add entry**. Set *Free or paid?* to **Free download**, then under *PDF file* click to upload your PDF. Save.

**Add a paid resource**
Create a Payment Link in Stripe (or a product on Gumroad) and copy its link. Resources → **Add entry**, set *Free or paid?* to **Paid**, paste the link into *Buy link*, and type the price to display (e.g. `$12`). Save.

**Change the rates**
Pages → Private Lessons → scroll to **Rates**. Each row has a name (EN/FR) and a price. Use the **+** button to add a row.

**Change a photo**
Click the image field, then **Upload** or choose an existing image. Photos look best when they are:
- Hero photo: portrait orientation (taller than wide)
- Section photos: landscape (wider than tall), around 1600 px wide
- Under 400 KB each if possible — large photos make the site slow on phones. https://squoosh.app shrinks them in seconds (choose WebP or JPEG, quality ~75)

**Turn on online booking**
Create a free account at https://calendly.com, make an event called "Free consultation" (20 minutes), and copy its link (looks like `https://calendly.com/yourname/consultation`). Paste it into **Site settings → Calendly link**. The booking calendar appears on the Contact page automatically.

**Reorder things**
Units, resources and testimonials each have an **Order** number. 1 shows first.

## Formatting text

The larger text boxes (intro, details, your story) accept simple formatting with the toolbar: **bold**, *italic*, bullet lists, links. Headings are added automatically by the site, so you don't need to add your own.

## Where messages go

The contact form sends an email to the address Colin set up in Netlify, and every message is also kept at https://app.netlify.com under **Forms**.

## If something looks wrong

Nothing you do in the editor can break the site permanently. Every save is kept in history, so Colin can restore any previous version. If the site does not update after a few minutes, or something looks odd, just tell Colin which page and what you changed.
