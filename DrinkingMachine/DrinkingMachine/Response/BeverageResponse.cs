using System;
using System.Collections.Generic;
using DrinkingMachine.Model;

namespace DrinkingMachine.Response
{
    public class BeverageResponse
    {
        public Beverage Enum { get; set; }

        public String Description { get; set; }

        public List<String> StepsOfPreparation { get; set; }

        public BeverageResponse(BeverageUtil beverageUtil)
        {
            this.Enum = beverageUtil.Enum;
            this.Description = beverageUtil.Description;
            this.StepsOfPreparation = beverageUtil.StepsOfPreparation;
        }
    }
}