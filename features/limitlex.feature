Feature: Limitlex

  Scenario: Widget code
    Given I login to Limitlex Forum Pay
    And open Widgets menu
    When I input Order Amount "23"
    And use Widget Code in browser
    And confirm I am not a robot
    Then widget will open with correct amount "23"
