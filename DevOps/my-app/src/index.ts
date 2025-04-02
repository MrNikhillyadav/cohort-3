export default {
	async fetch(request:Request, env:Env, ctx:ExecutionContext){
		console.log(request.body)

		if(request.method === 'POST'){
			return Response.json({
				message : "sent a post request"
			})
		
		}
		else{
			return Response.json({
				message: "did not got a post or delete request"
			})
		}
	}
}