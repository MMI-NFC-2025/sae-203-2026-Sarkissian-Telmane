import PocketBase from 'pocketbase';
const pb = new PocketBase('https://chorussymphonia.telmane.fr');

export async function artistesSorted() {
    const records = await pb.collection('artistes').getFullList({ sort: 'date_representation' });
    return records;
}

export async function scenesName() {
    const records = await pb.collection('scenes').getFullList({ sort: 'nom_scene' });
    return records;
}

export async function artistesName() {
    const records = await pb.collection('artistes').getFullList({ sort: 'nom_artiste' });
    return records;
}

export async function artisteID(id) {
    const record = await pb.collection('artistes').getOne(id);
    return record;
}

export async function sceneID(id) {
    const record = await pb.collection('scenes').getOne(id);
    return record;
}

export async function allartistebysceneId(id) {
    const records = await pb.collection('artistes').getFullList({ filter: scenes = "${id}", sort: 'date_representation' });
    return records;
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('scenes').getFirstListItem(nom = "${nom}");
    const records = await pb.collection('artistes').getFullList({ filter: scene = "${scenes.id}", sort: 'date_representation' });
    return records;
}
export async function addArtiste(artisteData) {
    try {
        const record = await pb.collection('artistes').create(artisteData);
        console.log('Artiste ajouté :', record);
        return record;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function addScene(sceneData) {
    try {
        const record = await pb.collection('scenes').create(sceneData);
        console.log('Scène ajoutée :', record);
        return record;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateArtiste(id, artisteData) {
    try {
        const record = await pb.collection('artistes').update(id, artisteData);
        console.log('Artiste modifié :', record);
        return record;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateScene(id, sceneData) {
    try {
        const record = await pb.collection('scenes').update(id, sceneData);
        console.log('Scène modifiée :', record);
        return record;
    } catch (error) {
        (error);
        throw error;
    }
}

export async function getEvents() {
    const today = new Date().toISOString();
    let events = await pb.collection("artistes").getFullList();
    return events;
}

export async function addMessage(messageData) {
    try {
        const record = await pb.collection('message').create(messageData);
        console.log('message ajouté :', record);
        return record;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getAllScenes() {
    const records = await pb.collection('scenes').getFullList();
    return records;
}