def generate_markdown_document(first_name, last_name):
    markdown_content = f"""

## Introduction
Nice to e-meet you :D I am Stephanie, a HCI/UX senior at University of Illinois-Urbana Champaign with a minor in art and design.

### Text Styles
- *Italic*
- **Bold**
- ***Italic and Bold***

### Lists
1. Ordered List Item 1
2. Ordered List Item 2
   - Unordered Sub-item A
   - Unordered Sub-item B

### Image with Caption
<img src="https://via.placeholder.com/150" alt="Placeholder Image">
<figcaption>Figure 1: Placeholder Image</figcaption>

### Table
| Hobby | Fav food | Color |
|----------|----------|----------|
| Skating  | Sushi  | Purple  |
| Badminton  | Dessert  | Blue  |

## Conclusion
This document demonstrates various stylistic elements in Markdown.
"""

    file_name = f"{Stephanie}_{Jin}.md"
    with open(file_name, "w") as markdown_file:
        markdown_file.write(markdown_content)

# Replace "Stephanie" and "Jin" with your first name and last name respectively
generate_markdown_document("Stephanie", "Jin")
