struct TrieNode {
public:
    TrieNode() : children(), end(false) {}
    unordered_map<char, TrieNode*> children;
    bool end;
};

class WordDictionary {
public:
    WordDictionary() : root(new TrieNode()) {}

    void addWord(string word) {
        TrieNode* node = root;
        for (char c : word) {
            if (node->children.find(c) == node->children.end()) {
                node->children[c] = new TrieNode();
            }
            node = node->children[c];
        }
        node->end = true;
    }

    bool search(string word) {
        return searchWord(word, root, 0);
    }

private:
    TrieNode* root;

    bool searchWord(const string& word, TrieNode* node, int index) const {
        if (!node || index == word.size()) {
            return node && node->end;
        }

        if (word[index] == '.') {
            for (const auto& pair : node->children) {
                if (searchWord(word, pair.second, index + 1)) {
                    return true;
                }
            }
            return false;
        } else {
            if (node->children.find(word[index]) == node->children.end()) {
                return false;
            }
            return searchWord(word, node->children[word[index]], index + 1);
        }
    }
};