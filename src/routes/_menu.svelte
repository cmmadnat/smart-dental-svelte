<script lang="ts">
	import { goto } from '$app/navigation';

	import MenuItem from './_menu-item.svelte';
</script>

<div>
	<ul>
		<MenuItem on:click={() => goto('/home')}>หน้าแรก</MenuItem>
		<MenuItem>ระบบลงทะเบียน</MenuItem>
		<MenuItem>ระบบนัดหมาย</MenuItem>
		<MenuItem>ระบบเวชระเบียน</MenuItem>
		<MenuItem>ระบบ PACS</MenuItem>
		<MenuItem>ระบบ EMR</MenuItem>
		<MenuItem>ระบบบันทึกการรักษา</MenuItem>
		<MenuItem>ระบบสั่งยา</MenuItem>
		<MenuItem>ระบบ POS</MenuItem>
		<MenuItem>ระบบชำระเงิน</MenuItem>
		<MenuItem>ระบบสอบถาม</MenuItem>
		<MenuItem>ระบบนำทาง</MenuItem>
		<MenuItem>ระบบบันทึกเวลาปฏิบัติงานผ่าน QR และ GPS</MenuItem>
		<MenuItem>ระบบลงปฏิบัติงาน</MenuItem>
		<MenuItem>ระบบพบทันตแพทย์ออนไลน์</MenuItem>
	</ul>
</div>
