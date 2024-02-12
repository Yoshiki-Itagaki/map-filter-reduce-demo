export default class substring{
    locateSubstring(emojiEntries){
        const newEmojipedia = emojiEntries.map(function (emojiEntry){
            return emojiEntry.meaning.substring(0, 100);
        })
        return newEmojipedia;
    }
}