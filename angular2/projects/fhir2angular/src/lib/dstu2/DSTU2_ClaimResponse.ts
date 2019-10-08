import { DSTU2_ClaimResponse_AddItem } from './DSTU2_ClaimResponse_AddItem'
import { DSTU2_ClaimResponse_Coverage } from './DSTU2_ClaimResponse_Coverage'
import { DSTU2_ClaimResponse_Error } from './DSTU2_ClaimResponse_Error'
import { DSTU2_ClaimResponse_Item } from './DSTU2_ClaimResponse_Item'
import { DSTU2_ClaimResponse_Note } from './DSTU2_ClaimResponse_Note'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Money } from './DSTU2_Money'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ClaimResponse      extends DSTU2_DomainResource
{

   static def : string = 'ClaimResponse';
   identifier : DSTU2_Identifier [];
   request : DSTU2_Reference ;
   ruleset : DSTU2_Coding ;
   originalRuleset : DSTU2_Coding ;
   created : string ;
   organization : DSTU2_Reference ;
   requestProvider : DSTU2_Reference ;
   requestOrganization : DSTU2_Reference ;
   outcome : string ;
   disposition : string ;
   payeeType : DSTU2_Coding ;
   item : DSTU2_ClaimResponse_Item [];
   addItem : DSTU2_ClaimResponse_AddItem [];
   error : DSTU2_ClaimResponse_Error [];
   totalCost : DSTU2_Money ;
   unallocDeductable : DSTU2_Money ;
   totalBenefit : DSTU2_Money ;
   paymentAdjustment : DSTU2_Money ;
   paymentAdjustmentReason : DSTU2_Coding ;
   paymentDate : string ;
   paymentAmount : DSTU2_Money ;
   paymentRef : DSTU2_Identifier ;
   reserved : DSTU2_Coding ;
   form : DSTU2_Coding ;
   note : DSTU2_ClaimResponse_Note [];
   coverage : DSTU2_ClaimResponse_Coverage [];
}
