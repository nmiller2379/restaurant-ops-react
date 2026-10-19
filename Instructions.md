# Restaurant Operations Dashboard

## User Stories

## Project Overview

Your team will build a **Restaurant Operations Dashboard** for restaurant managers and staff.

The application should help staff manage:

- Menu items
- Restaurant tables
- Reservations
- Basic restaurant status information

This application is **not** a point-of-sale system. It does not need to process payments, calculate tips, split checks, or manage individual customer orders.

The application must use:

- HTML
- CSS
- Bootstrap
- Vanilla JavaScript
- DOM manipulation
- JavaScript arrays and objects
- `localStorage`

User-created data should remain available after the page is refreshed.

---

# Required User Stories

## Navigation and General Layout

1. As a restaurant manager, I can navigate between the dashboard, menu, tables, and reservations sections so that I can access each part of the application.

2. As a restaurant manager, I can clearly see which section of the application I am currently viewing so that navigation is easy to understand.

3. As a restaurant manager, I can use the application on different screen sizes so that the interface remains usable.

4. As a restaurant manager, I receive a clear message when a section has no data to display so that the application does not appear broken.

---

# Dashboard

5. As a restaurant manager, I can view how many tables are currently available and occupied so that I can quickly understand the dining-room status.

6. As a restaurant manager, I can view how many menu items are currently available and unavailable so that I know what can be served.

7. As a restaurant manager, I can view the number of upcoming reservations so that I know how many parties are expected.

8. As a restaurant manager, I can view at least one additional calculated summary chosen by my team so that the dashboard provides useful information about restaurant operations.

Examples might include:

- Total seating capacity
- Percentage of tables occupied
- Average menu-item price
- Number of menu items by category
- Largest scheduled party

---

# Menu Management

9. As a restaurant manager, I can view all menu items so that I can review the restaurant’s current menu.

10. As a restaurant manager, I can add a menu item so that new food or drink options can be included.

11. As a restaurant manager, I can enter a name, category, price, and description for a menu item so that each item contains useful information.

12. As a restaurant manager, I cannot add a menu item when required information is missing or invalid so that incomplete menu items are not stored.

13. As a restaurant manager, I can edit an existing menu item so that its information can be corrected or updated.

14. As a restaurant manager, I can delete a menu item so that items no longer offered can be removed.

15. As a restaurant manager, I receive a confirmation before deleting a menu item so that I do not remove it accidentally.

16. As a restaurant manager, I can mark a menu item as available or unavailable so that staff know whether it can currently be served.

17. As a restaurant manager, I can search for menu items by name or filter them by category so that I can find relevant menu items quickly.

---

# Table Management

18. As a restaurant manager, I can view all restaurant tables so that I can see the current dining-room setup.

19. As a restaurant manager, I can add a table so that the application reflects the restaurant’s layout.

20. As a restaurant manager, I can enter a table number and seating capacity so that each table has useful identifying information.

21. As a restaurant manager, I cannot create two tables with the same table number so that each table remains uniquely identifiable.

22. As a restaurant manager, I can edit a table’s number or seating capacity so that incorrect information can be fixed.

23. As a restaurant manager, I can delete a table so that tables no longer in use can be removed.

24. As a restaurant manager, I receive a confirmation before deleting a table so that I do not remove it accidentally.

25. As a restaurant manager, I can mark a table as available or occupied so that its current status is clear.

26. As a restaurant manager, I can record the number of guests seated at an occupied table so that staff know the party size.

27. As a restaurant manager, I cannot seat more guests at a table than its listed capacity so that invalid table assignments are prevented.

28. As a restaurant manager, I can clear an occupied table so that it becomes available again after the guests leave.

---

# Reservation Management

29. As a restaurant manager, I can view all reservations so that I can see which parties are expected.

30. As a restaurant manager, I can add a reservation so that an expected party is recorded.

31. As a restaurant manager, I can enter the guest’s name, party size, date, time, and contact information so that the reservation contains the necessary details.

32. As a restaurant manager, I cannot create a reservation when required information is missing or invalid so that incomplete reservations are not stored.

33. As a restaurant manager, I can edit a reservation so that the party’s information can be corrected or updated.

34. As a restaurant manager, I can cancel or delete a reservation so that reservations that are no longer needed can be removed.

35. As a restaurant manager, I receive a confirmation before canceling or deleting a reservation so that I do not remove it accidentally.

36. As a restaurant manager, I can assign a reservation to a table so that staff know where the party is expected to sit.

37. As a restaurant manager, I cannot assign a reservation to a table that is too small for the party so that invalid assignments are prevented.

38. As a restaurant manager, I can mark a reservation as upcoming, seated, or completed so that its current status is clear.

39. As a restaurant manager, I can mark a reservation as seated so that the assigned table becomes occupied.

40. As a restaurant manager, I can mark a reservation as completed so that the assigned table becomes available again.

41. As a restaurant manager, I can search reservations by guest name or filter them by status so that I can find relevant reservations quickly.

---

# Data Persistence

42. As a restaurant manager, I can refresh or close the application without losing menu items, tables, or reservations so that my work is preserved.

43. As a restaurant manager, I can edit or delete saved information and see those changes remain after refreshing the page.

44. As a restaurant manager, I can reset the application’s saved data so that I can return the application to its starting state when necessary.

45. As a restaurant manager, I receive a confirmation before resetting all saved data so that I do not erase it accidentally.

---

# Validation and User Feedback

46. As a restaurant manager, I receive clear validation messages when I enter invalid information so that I know how to correct the problem.

47. As a restaurant manager, I receive clear feedback after successfully adding or updating information so that I know the action worked.

48. As a restaurant manager, I can cancel an add or edit operation so that I am not forced to save unwanted changes.

49. As a restaurant manager, I do not see duplicate rows, cards, or list items after adding, editing, filtering, or navigating so that the displayed information remains accurate.

---

# Minimum Viable Product

To complete the required application, the team must implement:

- Navigation between the major sections
- A dashboard with four calculated summaries
- Menu-item CRUD functionality
- Menu-item availability
- Menu search or filtering
- Table CRUD functionality
- Table availability and occupancy
- Party-size capacity validation
- Reservation CRUD functionality
- Reservation-to-table assignment
- Reservation status changes
- Reservation search or filtering
- Form validation
- `localStorage` persistence
- Clear empty states
- Confirmation before destructive actions
- Responsive Bootstrap-based layout

The team should aim to have the required application substantially complete before the final two project days so that those days can focus on testing, code review, integration, refactoring, and bug fixes.

---

# Optional Stretch User Stories

These should only be attempted after the required application is complete and stable.

50. As a restaurant manager, I can sort menu items by name or price so that I can review them in a useful order.

51. As a restaurant manager, I can filter menu items by both category and availability so that I can narrow the list more precisely.

52. As a restaurant manager, I can filter tables by status so that I can view only available or occupied tables.

53. As a restaurant manager, I can sort tables by number or seating capacity so that the table list is easier to review.

54. As a restaurant manager, I can filter reservations by date so that I can focus on reservations for a particular day.

55. As a restaurant manager, I can sort reservations by date and time so that upcoming reservations appear in chronological order.

56. As a restaurant manager, I can view the restaurant’s total seating capacity so that I understand how many guests the dining room can hold.

57. As a restaurant manager, I can view the percentage of tables currently occupied so that I can quickly estimate how busy the restaurant is.

58. As a restaurant manager, I can view the average menu-item price so that I can better understand the menu’s pricing.

59. As a restaurant manager, I can view a breakdown of menu items by category so that I can understand the balance of the menu.

60. As a restaurant manager, I receive a warning when two active reservations are assigned to the same table at the same date and time so that scheduling conflicts can be avoided.

61. As a restaurant manager, I can automatically see which tables are large enough for a selected reservation so that I do not have to compare capacities manually.

62. As a restaurant manager, I can view reservation details in a Bootstrap modal or detail panel so that the main reservation list remains uncluttered.

63. As a restaurant manager, I can use more advanced Bootstrap components to improve the usability of the interface without changing the core application behavior.

---

# Scope Limitations

The application does **not** need to and should **not** include:

- Customer payments
- Credit-card processing
- Tips or taxes
- Split checks
- Individual customer orders
- Kitchen tickets
- Employee schedules
- Payroll
- Inventory purchasing
- Online ordering
- User accounts
- Authentication
- A backend server
- A database

The project should focus on managing the restaurant’s menu, tables, reservations, and current operational status.

# File Structure

restaurant-dashboard/
│
├── index.html
├── README.md
│
├── css/
│ └── styles.css
│
├── js/
│ ├── app/
│ │ └── app.js
│ │
│ ├── storage/
│ │ └── storage.js
│ │
│ ├── menu/
│ │ └── menu.js
│ │
│ ├── tables/
│ │ └── tables.js
│ │
│ ├── reservations/
│ │ └── reservations.js
│ │
│ ├── dashboard/
│ │ └── dashboard.js
│ │
│ └── utils/
│ └── utils.js
│
└── assets/
└── images/
