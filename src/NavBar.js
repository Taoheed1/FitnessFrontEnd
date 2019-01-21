<Navbar>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#home">Lard Lad Fitness Tracker</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="#">
            Home
    </NavItem>
        <NavItem eventKey={2} href="#">
            Programs
    </NavItem>
    </Nav>
    <Nav pullRight>
        <NavItem eventKey={3} href="#">
            Login
    </NavItem>
        <NavItem eventKey={4} href="#">
            Register
    </NavItem>
        <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>Cardio</MenuItem>
            <MenuItem eventKey={2.2}>Weights</MenuItem>
            <MenuItem eventKey={2.3}>Home Workouts</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.4}>All Programs</MenuItem>
        </NavDropdown>
    </Nav>
</Navbar>;