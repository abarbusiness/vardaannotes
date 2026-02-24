const fs = require('fs');
const path = require('path');

const baseDir = "C:\\Users\\Ankit Raj Sharma\\Desktop\\VARDAAN NOTES\\vardaannotes\\ICSE\\Class 10\\Hindi";

const promptsData = {
    // SAHITYA SAGAR - STORIES
    "01 Baat Atthanni Ki": {
        prompt: "A highly detailed cinematic digital painting of an impoverished, desperate Indian servant standing with his head bowed in an opulent colonial-era room, facing a stern, wealthy master. He holds a tiny silver coin (an eight-anna piece) in his hand. Dramatic chiaroscuro lighting, emotional storytelling, ultra-realistic 8k, landscape format 16:9.",
        filename: "baat-atthanni-ki-court.jpg"
    },
    "02 Kaki": {
        prompt: "A heartwarming cinematic painting of a young, sorrowful Indian boy in traditional clothes secretly flying a large white paper kite into a beautiful, glowing twilight sky. An old, sympathetic servant watches him from the shadows of a rustic courtyard. Nostalgic lighting, emotional, highly detailed 8k, landscape format 16:9.",
        filename: "kaki-kite-sky.jpg"
    },
    "03 Mahayagya Ka Puraskar": {
        prompt: "A powerful, hyper-realistic scene of a noble, impoverished Indian merchant sitting on a dusty village road under the scorching desert sun, offering his very last piece of flatbread (roti) to a frail, starving dog. Divine, ethereal golden lighting, emotional sacrifice theme, 8k resolution, landscape format 16:9.",
        filename: "mahayagya-ka-puraskar-dog.jpg"
    },
    "04 Netaji Ka Chasma": {
        prompt: "A nostalgic and patriotic cinematic painting of a frail, old Indian man selling spectacles out of a small bamboo box. He is gently placing a real pair of glasses onto the face of a majestic marble statue of Subhash Chandra Bose in a bustling, dusty town square. Ultra-detailed, warm lighting, 8k, landscape format 16:9.",
        filename: "netaji-ka-chasma-statue.jpg"
    },
    "05 Apna Apna Bhagya": {
        prompt: "A hauntingly realistic scene in the freezing, fog-covered winter streets of Nainital. A ragged, shivering young boy crouches helplessly near a street lamp, while wealthy, well-dressed tourists in heavy coats walk past him, completely ignoring his plight. Moody cinematic lighting, cold blue tones, 8k, landscape format 16:9.",
        filename: "apna-apna-bhagya-nainital.jpg"
    },
    "06 Bade Ghar Ki Beti": {
        prompt: "A dignified cinematic portrait of a beautiful, strong-willed young Indian bride in rich traditional attire standing in the center of a modest rural courtyard. She is peacefully resolving a bitter argument between two brothers, bringing harmony to the family. Golden hour lighting, cultural authenticity, ultra-detailed 8k, landscape format 16:9.",
        filename: "bade-ghar-ki-beti-family.jpg"
    },
    "07 Sandeh": {
        prompt: "A pensive, emotional interior scene in a traditional 1930s Indian house. A pensive young man is packing his luggage, looking back with unspoken emotion at a graceful widow who is standing quietly near an intricately carved wooden doorway. Soft, melancholic window light, ultra-realistic details, 8k, landscape format 16:9.",
        filename: "sandeh-farewell.jpg",
        alternativeKey: "07 Sandeha"
    },
    "08 Bheed Mein Khoya Aadmi": {
        prompt: "An incredibly crowded, chaotic Indian railway station. A sea of people is pushing and shoving on the platform. In the center, a well-dressed man looks completely overwhelmed, lost, and stressed amidst the massive crowd. Dynamic lighting, hyper-detailed environments, social theme, 8k, landscape format 16:9.",
        filename: "bheed-mein-khoya-aadmi-station.jpg"
    },
    "09 Bhede Aur Bhediye": {
        prompt: "A dark, satirical, highly detailed fantasy illustration of a forest clearing. Innocent, fluffy white sheep are sitting attentively, surrounded by cunning, glowing-eyed wolves who are disguised as gentle saints and intellectuals wearing robes. Eerie, dramatic cinematic lighting, ultra-realistic 8k, landscape format 16:9.",
        filename: "bhede-aur-bhediye-satire.jpg"
    },
    "10 Do Kalakar": {
        prompt: "A split-composition cinematic painting inside a vibrant room. On one side, an eccentric artist paints passionately on a messy canvas surrounded by colors. On the other side, a dedicated, compassionate young woman is caring for poor street children, holding a beggar baby. Warm, contrasting lighting, masterpiece 8k, landscape format 16:9.",
        filename: "do-kalakar-contrast.jpg"
    },

    // SAHITYA SAGAR - POEMS
    "01 Sakhi": {
        prompt: "A serene, highly spiritual cinematic painting of an ancient Indian ascetic deep in meditation beneath a massive banyan tree. A glowing, divine aura surrounds him as he represents ultimate enlightenment and surrender to the Guru. Ethereal, god-ray lighting, hyper-realistic details, 8k, landscape format 16:9.",
        filename: "sakhi-kabir-meditation.jpg"
    },
    "02 Giridhar Ki Kundaliyan": {
        prompt: "A beautiful rural Indian scene featuring a wise, wandering saint standing on a dirt path. He is holding a sturdy wooden stick (Lathi) and is wrapped in a simple black woolen blanket (Kamri). He looks thoughtfully at village life around him. Warm sunset lighting, authentic cultural details, 8k, landscape format 16:9.",
        filename: "giridhar-kundaliyan-saint.jpg"
    },
    "03 Swarg Bana Sakte Hain": {
        prompt: "A magnificent, utopian cinematic landscape portraying a heavenly Earth. People of all backgrounds and classes are holding hands harmoniously in a lush, incredibly prosperous green valley under a brilliant, golden, glowing sky. Epic scale, highly detailed masterpiece, 8k, landscape format 16:9.",
        filename: "swarg-bana-sakte-hain-utopia.jpg"
    },
    "04 Vah Janmabhoomi Meri": {
        prompt: "A breathtaking, majestic, wide-angle landscape of India. The scene features the towering, snow-capped peaks of the Himalayas in the background, a flowing, sparkling river (Ganga) in the midground, and lush green agricultural fields bathed in golden morning light. Hyper-realistic, 8k, landscape format 16:9.",
        filename: "janmabhoomi-meri-landscape.jpg"
    },
    "05 Megh Aaye": {
        prompt: "A highly dramatic and beautiful rendering of an Indian village anticipating rain. Dark, heavy, majestic monsoon clouds roll over the sky like a visiting VIP. The trees sway joyfully in the wind, and villagers look up with bright, welcoming smiles. Dynamic cinematic lighting, detailed rain clouds, 8k, landscape format 16:9.",
        filename: "megh-aaye-monsoon.jpg"
    },
    "06 Sur Ke Pad": {
        prompt: "A charming, hyper-realistic mythological painting of a cute, dark-complexioned child (Lord Krishna) wearing yellow silk and peacock feathers. His face is smeared with fresh white butter, and he is playfully arguing with his loving mother Yashoda in a rustic ancient Indian courtyard. Warm, magical lighting, 8k, landscape format 16:9.",
        filename: "sur-ke-pad-krishna.jpg",
    },
    "07 Vinay Ke Pad": {
        prompt: "An intensely spiritual, cinematic portrait of a devout Indian saint (Tulsidas) sitting under a temple pillar, singing passionately with eyes closed. Behind him, a massive, ethereal, glowing apparition of Lord Rama holding a bow appears in the mist. Divine god-ray lighting, masterpiece 8k, landscape format 16:9.",
        filename: "vinay-ke-pad-tulsidas.jpg"
    },
    "08 Bhikhshuk": {
        prompt: "A heart-wrenching, gritty cinematic painting depicting immense poverty. A frail, starving older beggar and his two hungry children are sitting on a dusty street corner, sadly licking food remnants from discarded leaf-plates. Emotional storytelling, high contrast, hyper-detailed textures, 8k, landscape format 16:9.",
        filename: "bhikhshuk-struggle.jpg",
        alternativeKey: "08 Bhikshuk" // Typo fallback
    },
    "09 Chalna Hamara Kaam Hai": {
        prompt: "An inspiring, epic cinematic painting of a determined, silhouetted traveler walking steadily on a long, winding, rugged mountain path. He is heading towards a brilliantly glowing, colorful sunrise on the distant horizon, overcoming obstacles. Inspirational mood, breathtaking scenery, 8k, landscape format 16:9.",
        filename: "chalna-hamara-kaam.jpg",
        alternativeKey: "09 Chalna Hamara Kam Hai"
    },
    "10 Matri Mandir Ki Or": {
        prompt: "A passionate, patriotic cinematic scene of a brave young Indian woman leading a massive crowd of followers. She holds the Indian flag high as they march resolutely through an ancient landscape towards a glowing, magnificent abstract temple representing the Motherland. Epic scale, heroic lighting, 8k, landscape format 16:9.",
        filename: "matri-mandir-ki-or.jpg"
    },

    // EKANKI SANCHAY
    "01 Sanskar Aur Bhavna": {
        prompt: "An intense, dramatic confrontation inside a traditional Indian middle-class living room. An orthodox, elderly mother dressed in a white saree stands firmly against her passionate, modern son. The scene beautifully captures the clash between old traditions and modern feelings. Highly detailed, cinematic lighting, 8k, landscape format 16:9.",
        filename: "sanskar-aur-bhavna.jpg"
    },
    "02 Bahu Ki Vida": {
        prompt: "A highly emotional, tense cinematic moment inside a wealthy, intricately decorated Indian household. A beautiful young newlywed bride in heavy bridal wear is crying silently with her head bowed, while her stern, arrogant in-laws look down on her, refusing to let her go home due to dowry greed. Dramatic lighting, 8k, landscape format 16:9.",
        filename: "bahu-ki-vida.jpg"
    },
    "03 Matri Bhoomi Ka Man": {
        prompt: "An epic, intense historical battle scene in medieval Rajasthan. A brave, proud Rajput warrior stands defiantly on the blood-stained walls of a small stone fort, raising his sword to defend his motherland against a massive, overwhelming invading army below. Cinematic, gritty, highly detailed, 8k, landscape format 16:9.",
        filename: "matri-bhoomi-ka-man.jpg"
    },
    "04 Sukhi Dali": {
        prompt: "A heartwarming cinematic portrait of a large, united Indian joint family sitting together affectionately in a grand, sunlit traditional courtyard. In the center is an authoritative but loving elderly patriarch sitting on a charpai. A massive, flourishing banyan tree towers above them in the background. Ultra-detailed, 8k, landscape format 16:9.",
        filename: "sukhi-dali-family.jpg"
    },
    "05 Mahabharat Ki Ek Sanjh": {
        prompt: "A somber, hauntingly epic twilight scene on the bloody, deserted battlefield of Kurukshetra. A fallen, majestic king with a shattered mace lies heavily injured on the dusty ground. The long, dark shadows of sunset stretch across the field as he reflects on his pride and fall. Dramatic, melancholic lighting, masterpiece 8k, landscape format 16:9.",
        filename: "mahabharat-ki-ek-sanjh.jpg"
    },
    "06 Deepdan": {
        prompt: "A fiercely intense, historical night scene inside an ancient stone Rajput palace. A fiercely loyal nursemaid sits in the dark, her face full of silent agony, having just placed her own sleeping child in the royal bed to sacrifice him and save the true prince from incoming assassins. Eerie torchlight, hyper-realistic, 8k, landscape format 16:9.",
        filename: "deepdan-sacrifice.jpg"
    },

    // NAYA RASTA
    "Naya Rasta": {
        prompt: "An inspiring, modern cinematic portrait of a confident, educated young Indian woman standing independently on the campus of a bustling city college or institute. She is smiling brightly, looking towards a hopeful future, having broken the chains of societal pressure and marriage expectations. Golden morning light, vibrant, 8k, landscape format 16:9.",
        filename: "naya-rasta-novel.jpg"
    }
};

function getPromptData(filepath) {
    for (const key of Object.keys(promptsData)) {
        if (filepath.includes(key) || (promptsData[key].alternativeKey && filepath.includes(promptsData[key].alternativeKey))) {
            return promptsData[key];
        }
    }
    // Fallback if not found exactly
    return {
        prompt: "A beautifully crafted, highly detailed cinematic digital painting capturing the essence of classic Indian literature. The scene should be expressive, emotional, and culturally authentic. Dramatic and evocative lighting, premium 8k resolution, landscape format 16:9.",
        filename: "indian-literature-scene.jpg"
    };
}

let count = 0;

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);

        if (stat.isDirectory()) {
            walkDir(filepath);
        } else if (file === "ChapterNotes.html") {
            let content = fs.readFileSync(filepath, 'utf-8');

            const regex = /<!-- AI IMAGE PROMPT PLACEHOLDER -->[\s\S]*?<!-- \/AI IMAGE PROMPT PLACEHOLDER -->/;

            if (regex.test(content)) {

                const data = getPromptData(filepath);

                const newPlaceholder = `<!-- AI IMAGE PROMPT PLACEHOLDER -->
        <div style="width: 100%; max-width: 800px; margin: 30px auto; background: #fff; border: 2px dashed #9933ff; border-radius: 12px; padding: 20px; text-align: center; box-shadow: 0 10px 30px rgba(153, 51, 255, 0.1);">
            <div style="background: rgba(153, 51, 255, 0.1); border-radius: 8px; padding: 40px 20px; margin-bottom: 20px; border: 1px solid rgba(153, 51, 255, 0.2);">
                <i data-lucide="image" style="width: 48px; height: 48px; color: #9933ff; margin-bottom: 10px;"></i>
                <h3 style="margin: 0; color: #4a148c; font-family: 'Montserrat', sans-serif; font-size: 1.2rem; border: none; padding: 0;">Main Chapter Illustration Placeholder</h3>
                <p style="color: #666; font-size: 0.9rem; margin-top: 5px; font-family: 'Montserrat', sans-serif;">Insert generated image here</p>
            </div>
            <div style="text-align: left; background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #00ffff;">
                <p style="margin: 0 0 10px 0; font-family: 'Montserrat', sans-serif; font-weight: 600; color: #333; font-size: 0.9rem;">Suggested AI Image Prompt (Cinematic Premium Style):</p>
                <p style="margin: 0; font-family: 'Poppins', sans-serif; font-size: 0.9rem; color: #555; line-height: 1.6; font-style: italic;">
                    "${data.prompt}"
                </p>
                <p style="margin: 15px 0 0 0; font-family: 'Montserrat', sans-serif; font-weight: 600; color: #555; font-size: 0.85rem;">
                    Recommended Filename: <span style="font-family: monospace; color: #1565c0; background: #e3f2fd; padding: 2px 6px; border-radius: 4px;">${data.filename}</span>
                </p>
            </div>
        </div>
        <!-- /AI IMAGE PROMPT PLACEHOLDER -->`;

                const newContent = content.replace(regex, newPlaceholder);
                fs.writeFileSync(filepath, newContent, 'utf-8');
                console.log(`Updated placeholder in ${filepath}`);
                count++;
            }
        }
    }
}

walkDir(baseDir);
console.log(`Done. Updated ${count} files.`);
