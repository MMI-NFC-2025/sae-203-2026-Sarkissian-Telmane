import { artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene, addMessage } from './backend.mjs';



// try {
//     const records = await artistesSorted();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await scenesName();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await artistesName();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await artisteID('m57hylh0mkpa9vf');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await sceneID('h9q87py9tn1a316');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await allartistebysceneId('h9q87py9tn1a316');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const records = await allartistebysceneName('Mureille');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const artisteData = {
//         "nom": "Mozart",
//         "date_de_representation": "2026-08-30T23:45:00.000Z",
//         "scene" : "h9q87py9tn1a316",
//         "description" : "Lui-même réincarné",
// };
//     await addArtiste(artisteData);
// } catch (e) {
//     console.error(e);
// }


// try {
//     const sceneData = {
//         "nom": "Salle de bal",
//         "artistes": ["6tppmyxqlignecd", "zeg78qfhga2umq5"],
//         "description" : "La Salle de bal de la Citadelle",
// };
//     await addScene(sceneData);
// } catch (e) {
//     console.error(e);
// }


// try {
//     const data = {
//         "nom": "Beethoven",
//         "date_de_representation": "2026-08-29T19:00:00.000Z",
//         "scene" : "eagd112hd7dopre",
//         "description" : "Lui-même réincarné en chair et en os",
//     };
//     const record = await updateArtiste('agld9fq1vpz8hck', data);
//     console.log(JSON.stringify(record, null, 2));
// } catch (e) {
//     console.error(e);
// }


// try {
//     const data = {
//         "nom": "Cours intérieur",
//         "artistes": ["m57hylh0mkpa9vf", "0tpgo2scsqgvbea"],
//         "description": "Cette fois si, c'est la cours intérieur",
//     };
//     const record = await updateScene('eagd112hd7dopre', data);
//     console.log(JSON.stringify(record, null, 2));
// } catch (e) {
//     console.error(e);
// }

try {
    const messageData = {
        "nom": "Jean-michel",
        "email": "jean@gmail.com",
        "message" : "Le site m'a l'air vachement incomplé ?",
};
    await addMessage(messageData);
} catch (e) {
    console.error(e);
}