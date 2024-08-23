/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package practice.pep;
import java.util.*;


/**
 *
 * @author ASUS
 */
public class PracticePep {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter a string:");
        String str= sc.nextLine();              //reads string   
         
       
         String[] Arr = str.split(" ");
         String Result="";

        for(int i=0 ; i<Arr.length-1; i++)
        {
            if(Arr[i].equals(""))
                continue;
            else{
                Result=Result + Arr[i].charAt(0)+". ";
            }
        }
        
            Result=Result+Arr[Arr.length-1];
           StringBuilder s = new StringBuilder(Arr[Arr.length-1]);
            for( int i=0; i<s.length();i++){    
                Character c = s.charAt(i);
                s.replace(c,c.toLowerCase());
                
            }
            System.out.println(Result.toUpperCase());
                
           
         // result= result + Arr[Arr.length-1].charAt(0).toUpperCase();
        
        
        
        
    }
    
}
