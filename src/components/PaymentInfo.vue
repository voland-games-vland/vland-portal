<template>
    <div>
        <div>
            By selecting a V-Land Points package, you agree to the <RouterLink to="/terms-of-service" target="_blank" class="text-blue-500">
                Terms of Service</RouterLink> and <label for="refund-policy" class="text-blue-500 cursor-pointer">Refund Policy </label>
        </div>
        <teleport to="body">
            <input type="checkbox" id="refund-policy" class="modal-toggle" />
            <label for="refund-policy" class="modal cursor-pointer">
                <label class="modal-box relative" for="">
                    <label for="refund-policy" class="btn btn-sm btn-square absolute right-2 top-2">✕</label>
                    <h3 class="text-xl font-bold">REFUND POLICY</h3>
                    <p>TBD</p>
                </label>
            </label>
        </teleport>
    </div>
</template>
<script lang="ts" setup></script>