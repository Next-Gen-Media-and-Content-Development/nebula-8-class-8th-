/**
 * ═══════════════════════════════════════════════════════════════════
 *  NEBULA-8 · CH-9 · NOTES MEDIA CONFIG
 *  ─────────────────────────────────────────────────────────────────
 *  Edit ONLY this file to add images or videos to any note topic.
 *  Never touch solution-lab-ch9.html for media changes.
 *
 *  HOW TO USE
 *  ──────────
 *  Each entry in NOTES_MEDIA maps to a note topic by its EXACT title.
 *  You can add:
 *    • images  → array of { src, caption } objects
 *    • videos  → array of { src, label }   objects
 *
 *  Images can be:
 *    - A relative path:   "my-image.png"         (file in same GitHub folder)
 *    - A full URL:        "https://..."
 *    - A base64 URI:      "data:image/png;base64,..."
 *
 *  Videos can be:
 *    - A GitHub raw URL:  "https://raw.githubusercontent.com/..."
 *    - Any direct MP4 URL accessible via CORS
 *
 *  EXAMPLE — adding to a new topic:
 *  ─────────────────────────────────
 *  "Density": {
 *    images: [
 *      { src: "density-diagram.png", caption: "Density = Mass ÷ Volume" }
 *    ],
 *    videos: [
 *      { src: "https://raw.githubusercontent.com/.../density.mp4", label: "Watch: Density Explained" }
 *    ]
 *  },
 *
 *  You can add multiple images and multiple videos to any single topic.
 *  Order: images appear first, then videos, both below the explanation text.
 * ═══════════════════════════════════════════════════════════════════
 */

const NOTES_MEDIA = {

  "Mixtures: Uniform and Non-uniform": {
    images: [
      {
        src: "ORS_solution.png",
        caption: "Dissolving: Making a Solution — ORS shows solute + solvent = uniform solution"
      }
    ]
  },

  "Solute, Solvent, and Solution": {
    images: [
      {
        src: "ORS_solution.png",
        caption: "Inside a solution: sugar and salt particles spread evenly between water molecules"
      }
    ]
  },

  "Saturated and Unsaturated Solutions": {
    images: [
      {
        src: "unsaturated_solution.jpeg",
        caption: "Unsaturated solution: the solvent still has 'room' for more solute particles"
      }
    ]
  },

  "Concentration: Dilute and Concentrated": {
    images: [
      {
        src: "dilute_and_concentrated_solution.png",
        caption: "Dilute vs Concentrated: fewer vs more solute particles in the same volume"
      }
    ],
   
      }
    ]
  }

  /*
   * ── ADD NEW TOPICS BELOW THIS LINE ──────────────────────────────
   * Copy this block and fill in the title + media:
   *
   * ,
   * "Exact Topic Title Here": {
   *   images: [
   *     { src: "filename.png", caption: "Your caption here" }
   *   ],
   *   videos: [
   *     { src: "https://...", label: "Watch: Your Label" }
   *   ]
   * }
   */

};
