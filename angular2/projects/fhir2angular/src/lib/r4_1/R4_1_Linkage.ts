import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Linkage_Item } from './R4_1_Linkage_Item'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Linkage      extends R4_1_DomainResource
{

   static def : string = 'Linkage';
   active : boolean ;
   author : R4_1_Reference ;
   item : R4_1_Linkage_Item [];
}
