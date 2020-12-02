using System;
using System.Collections.Generic;

namespace DrinkingMachine.Model
{
    public enum Beverage
    {
        LemonTea,
        Coffee,
        Chocolate
    }
    
    public class BeverageUtil
    {
        private static readonly String DescriptionLemonTea = "Lemon Tea";
        private static readonly List<String> StepsLemonTea = new List<String>()
        {
            "Boil some water",
            "Steep the water in the tea",
            "Pour tea in the cup",
            "Add lemon"
        };
        
        private static readonly String DescriptionCoffee = "Coffee";
        private static readonly List<String> StepsCoffee = new List<String>()
        {
            "Boil some water",
            "Brew the coffee grounds",
            "Pour coffee in the cup",
            "Add sugar and milk"
        };
        
        private static readonly String DescriptionChocolate = "Chocolate";
        private static readonly List<String> StepsChocolate = new List<String>()
        {
            "Boil some water",
            "Add drinking chocolate powder to the water",
            "Pour chocolate in the cup"
        };

        public static readonly BeverageUtil LemonTea = new BeverageUtil(Beverage.LemonTea, DescriptionLemonTea, StepsLemonTea);
        public static readonly BeverageUtil Coffee = new BeverageUtil(Beverage.Coffee, DescriptionCoffee, StepsCoffee);
        public static readonly BeverageUtil Chocolate = new BeverageUtil(Beverage.Chocolate, DescriptionChocolate, StepsChocolate);

        public static IEnumerable<BeverageUtil> Values {
            get
            {
                yield return LemonTea;
                yield return Coffee;
                yield return Chocolate;
            }
        }
        
        public Beverage Enum { get; set; }
        
        public String Description { get; set; }
        
        public List<String> StepsOfPreparation { get; set; }

        public BeverageUtil(Beverage beverage, String description, List<String> stepsOfPreparation)
        {
            this.Enum = beverage;
            this.Description = description;
            this.StepsOfPreparation = stepsOfPreparation;
        }
    }
}