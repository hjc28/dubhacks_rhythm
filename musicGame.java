import java.util.*;
public class musicGame{
   public static void main(String[] args){
      String[][] grid = new String[5][5];
      grid[0][0] = "Cq"; // next = Right
      grid[0][1] = "Cq"; // next = Down
      grid[1][1] = "Gq"; // next = Down
      grid[2][1] = "Gq"; // next = Right
      grid[2][2] = "Aq"; // next = Down
      grid[3][2] = "Aq"; // next = Left
      grid[3][1] = "Gh";
      
      //System.out.println(Arrays.deepToString(grid));
      for(int i = 0; i < grid.length; i++){
         for(int j = 0; j < grid[0].length; j++){
            System.out.print(grid[i][j] + ",");
         }
         System.out.println();
      }
   }
}