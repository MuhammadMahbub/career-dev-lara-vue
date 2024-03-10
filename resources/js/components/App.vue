<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active" aria-current="page"
                            >Home</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link active" aria-current="page"
                            >Dashboard</router-link>
                    </li>


                </ul>
                <form class="d-flex" role="search">

                    <router-link class="btn btn-outline-info mx-2 text-white"  to="login">
                        Login
                    </router-link>
                    <router-link class="btn btn-outline-primary mx-2 text-white"  to="register">
                        Register
                    </router-link>
                </form>
            </div>
        </div>
    </nav>

    <router-view></router-view>
</template>
