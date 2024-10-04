Feature: The Internet Guinea Pig Website with actor

  Scenario Outline: As a user, I can log into the secure area with actor

    Given I am on the login page with actor
    When I login with actor with <username> and <password>
    Then I should see with actor a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
