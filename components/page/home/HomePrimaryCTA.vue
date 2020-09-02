<template>
  <fragment>
    <n-link to="/step-0" class="[ primary-cta ] [ text-4xl bg-light p-4 ]">
      <div class="primary-cta-content">
        <span class="[ primary-cta-number ] [ text-7xl text-primary ]">0.</span>
        <span>Find Your Mission</span>
      </div>
    </n-link>
  </fragment>
</template>

<style lang="scss" scoped>
.primary-cta {
  box-shadow: inset 0 0 10px -5px #2d3748;
  clip-path: url('#paper-shape');
  display: inline-block;
  font-style: italic;
  transform: rotate(-5deg);
}

.primary-cta-content {
  transform: rotate(5deg);
}
</style>
