using System;
using System.Collections.Generic;
using System.Linq;
using DrinkingMachine.Model;
using DrinkingMachine.Response;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DrinkingMachine.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BeveragesController : ControllerBase
    {
        private readonly ILogger<BeveragesController> _logger;

        public BeveragesController(ILogger<BeveragesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<BeverageResponse> GetList()
        {
            return BeverageUtil.Values
                .Select(beverage => new BeverageResponse(beverage))
                .ToArray();
        }

        [HttpGet]
        [Route("{beverage}")]
        public BeverageResponse GetSteps(Beverage beverage)
        {
            BeverageUtil beverageUtil = BeverageUtil.Values.First(item => beverage.Equals(item.Enum));

            if (beverageUtil != null)
            {
                return new BeverageResponse(beverageUtil);
            }
            
            throw new Exception("Beverage not found");
        }
    }
}