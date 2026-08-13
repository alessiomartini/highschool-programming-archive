# High School Informatics Archive — Villa Greppi (2016–2018)

Everything written during the *Informatica* course at Istituto Villa Greppi
(Monticello Brianza), roughly **2016 to 2018** — Alessio Martini, class 3ᵃ TA.

This is a snapshot of a working folder, not a curated project: first Python
programs, the web-server tree from a Raspberry Pi that was used as a home
server, and a handful of front-end experiments. It is kept as a record of where
the programming started. Nothing here is maintained, and none of it should be
taken as an example of good practice — that is rather the point of keeping it.

File names, comments and content are in Italian.

## What is in here

### `Python/` — the course exercises

Nine small NetBeans/Python projects, named after the date of the lesson they
belong to (`Python7_10First`, `Python14_10`, `ONE21_10_17`, `Classe4_11_17`,
`ESERCIZI18_11_2017`, `funzioni25_11_17`, …). Between them they cover the usual
first-year progression:

- input/output and `while` loops (nested loops printing number triangles;
  a phone-bill calculator based on a per-unit rate);
- **lists**, and then **two-dimensional lists** — `python_Esercizi_ListeBidimensionali`
  splits its work across `funz.py` and `new_main.py`, the first time the code is
  separated into a module and a caller;
- **functions** (`funzioni25_11_17`, present twice — the second copy is a typo,
  `funzzioni25_11_17`);
- **classes** (`Classe4_11_17`).

`Verifica17_11_2017MartiniAlessio3TA.X` is a graded class test, submitted as a
project folder.

Much of the exercise code is commented out rather than deleted: each file tends
to hold several successive attempts stacked on top of one another, with only the
last one active. That is how the folder was actually used.

### `Repos/` — small standalone projects

- **`Realtime Plot.py`** — a live plot: `matplotlib.animation` re-reads a file
  called `data` on every frame and redraws the curve. The companion piece to the
  Raspberry Pi sensor logging.
- **`Kards10/`** — *Arte Futuristica*, a museum website built for a school
  assignment (Bootstrap, a Salvador Dalí timeline page saved from the web as
  reference, a PHP contact form under `inc/sendEmail.php`).
- **`ONE21_10_17/`** — a copy of one of the Python exercises.

### `rasp.var.www/` — the Raspberry Pi web root

A copy of `/var/www` from a Raspberry Pi used as a home web server. This is the
largest part of the repository and the most miscellaneous:

| Folder | What it was |
| --- | --- |
| `alessiomartini/` | A personal site — the earliest ancestor of the current [alessiomartini.github.io](https://github.com/alessiomartini/alessiomartini.github.io), complete with `sitemap.xml`, `robots.txt`, a PHP contact form and a Google site-verification file |
| `devwebsite/` | The sandbox: downloaded Bootstrap themes (*Sentra*, *Vanilla*, *Reflux*, *The Town*), a PHP mail form, and `OLD/` with earlier experiments including a long-polling chat demo |
| `ristorante/` | A restaurant one-page template, set up with Google site verification — a site built for someone else |
| `mini_profile/` | A Bootstrap profile template |
| `admin/` | An admin panel with a jQuery UI datepicker |
| `film/` | A media page serving an `.mp4` over the local network, with a shell script beside it |
| `html/` | The default server root, plus `python+/` — CGI-style Python scripts served by the Pi |

Most of the CSS, fonts and images under this tree are **third-party template
assets** (Bootstrap, Font Awesome, Owl Carousel), downloaded at the time and
committed along with everything else. They are not original work.

### `Biennio/`

`Calcolo incassi cinema multisala.xlsx` — a multiplex box-office spreadsheet
from the first two years, before programming proper started.

## Running any of it

The Python is Python 2/3-era beginner code with no dependencies beyond
`matplotlib` for the live plot. The web folders are static except where noted;
the PHP contact forms and `python+/` need a server that was configured on a
Raspberry Pi that no longer exists, so they will not run as-is.

```bash
python3 "Repos/Realtime Plot.py"   # needs a file named `data` in the cwd
```

## Note on the `.X` folders and `.DS_Store`

`.X` is the NetBeans project-folder suffix used by the school's toolchain (the
same convention as the MPLAB X projects in
[`MPLAB_X`](https://github.com/alessiomartini/MPLAB_X)); `dist/`, `build/` and
`nbproject/` inside them are IDE output. The `.DS_Store` files came from the
macOS machine the folder passed through.

## Related repository

- [`MPLAB_X`](https://github.com/alessiomartini/MPLAB_X) — the electronics half
  of the same years: PIC18 assembly programs from the same school.
