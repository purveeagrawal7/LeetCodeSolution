class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> charMap = new HashMap<Character, Integer>();
        int left = 0;
        int right = 0;
        int maxLength = 0;
        int n = s.length();
        while(right < n){
            if(charMap.containsKey(s.charAt(right))){
                if(charMap.get(s.charAt(right)) < left){
                    charMap.put(s.charAt(right), right);
                }
                else{
                    left = charMap.get(s.charAt(right)) + 1;
                }
            }
            charMap.put(s.charAt(right), right);
            maxLength = Math.max(maxLength, right-left+1); 
            right ++;
        }
        return maxLength;
    }
}
