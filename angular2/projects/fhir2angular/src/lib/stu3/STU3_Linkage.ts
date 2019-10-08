import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Linkage_Item } from './STU3_Linkage_Item'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Linkage      extends STU3_DomainResource
{

   static def : string = 'Linkage';
   active : boolean ;
   author : STU3_Reference ;
   item : STU3_Linkage_Item [];
}
